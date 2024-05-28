/* eslint-disable react/jsx-filename-extension */
/* eslint-disable no-unused-vars */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable no-plusplus */
import {differenceInCalendarDays, format, formatDistanceToNow} from "date-fns";
import Compress from "react-image-file-resizer";

export const setCookie = (name, value, days, domain) => {
    let expires = "";
    if (days) {
        const date = new Date();
        date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
        expires = `; expires=${date.toUTCString()}`;
    }
    const domainString = domain ? `; domain=${domain}` : "";
    document.cookie = `${name}=${value || ""}${expires}; path=/${domainString}`;

    return true;
};

export const getCookie = name => {
    const nameEQ = `${name}=`;
    const ca = typeof document !== "undefined" && document.cookie.split(";");
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) === " ") c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
};

export const clearCookie = name => {
    document.cookie = `${name}=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;`;

    return true;
};

export const convertPdfBase64 = file =>
    new Promise(resolve => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
            resolve(reader.result);
        };
    });

export const compressImage = (file, type = "JPEG") =>
    new Promise(resolve => {
        Compress.imageFileResizer(
            file,
            Infinity,
            Infinity,
            type,
            70,
            0,
            uri => {
                resolve(uri);
            },
            "base64"
        );
    });

export const capitalize = (str = "") => {
    const arr = str.toLowerCase().split(" ");

    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    }
    const str2 = arr.join(" ");
    return str2;
};

export const getStatusIconClass = (status = "") => {
    switch (status.trim().toLowerCase()) {
        case "pending":
            return "icon-clock";
        case "processing":
            return "icon-clock";
        case "approved":
            return "icon-check-circle";
        case "rejected":
            return "icon-error-circle";
        case "cancelled":
            return "icon-times-circle";
        default:
            return "icon-warning";
    }
};

function changeTimezone(date, ianatz) {
    // suppose the date is 12:00 UTC
    const invdate = new Date(
        date.toLocaleString("en-US", {
            timeZone: ianatz,
        })
    );

    // then invdate will be 07:00 in Toronto
    // and the diff is 5 hours
    const diff = date.getTime() - invdate.getTime();

    // so 12:00 in Toronto is 17:00 UTC
    return new Date(date.getTime() - diff); // needs to substract
}

export const getDateObject = e => changeTimezone(new Date(e), "Canada/Eastern");

export const convertToCurrencyFormat = (amount = "0") =>
    `$${Number(amount)
        .toFixed(2)
        .toString()
        .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`;

export const shortenString = (str, len = 10) => {
    if (!str) return null;
    if (str.length > len) {
        return `${str.substring(0, len)}...`;
    }
    return str;
};

export const convertReadable = (amount = 0) =>
    `${
        Math.abs(amount) > 999
            ? `${Math.sign(amount) * (Math.abs(amount) / 1000).toFixed(1)}K`
            : Math.sign(amount) * Math.abs(amount)
    }`;

export const GeoCode = async value => {
    try {
        const {results} = typeof window !== "undefined" && (await new window.google.maps.Geocoder().geocode(value));

        if (!results) {
            throw Error("Unable to load maps");
        }
        const {address_components, geometry, place_id, formatted_address, types} = results[0];
        const address = {};
        // eslint-disable-next-line no-shadow
        address_components?.forEach(({short_name, types}) => {
            if (types.includes("administrative_area_level_1")) {
                address.state = short_name;
            } else if (types.includes("administrative_area_level_2")) {
                address.county = short_name;
            } else if (types.includes("locality")) {
                address.city = short_name;
            } else address[types[0]] = short_name;
        });

        return {
            ...address,
            types,
            place_id,
            latlng: {
                lat: geometry?.location?.lat(),
                lng: geometry?.location?.lng(),
            },
            formatted_address,
        };
    } catch (err) {
        throw Error(err?.message ?? "Unable to load maps");
    }
};

export const convertToBase64 = file =>
    new Promise(resolve => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
            resolve(reader.result);
        };
    });

export const getVisitNo = visit => {
    switch (visit) {
        case 1:
            return `${String(visit)}st`;
        case 2:
            return `${String(visit)}nd`;
        case 3:
            return `${String(visit)}rd`;
        default:
            return `${String(visit)}th`;
    }
};

const validateImage = url =>
    new Promise((resolve, reject) => {
        const img = new Image(url);
        // eslint-disable-next-line no-multi-assign
        img.onerror = img.onabort = async function () {
            reject();
        };
        img.onload = function () {
            resolve();
        };
        img.src = url;
    });

const checkValidImageProtocol = url => {
    if (/(http(s?)):\/\//i.test(url)) {
        return true;
    }
    return false;
};

const checkValidImageExtension = url => {
    if (["png", "PNG", "jpg", "JPG", "jpeg", "JPEG"].includes(url.split(/[#?]/)[0].split(".").pop().trim())) {
        return true;
    }
    return false;
};

export const checkInValidImage = async url => {
    try {
        await validateImage(url);
        return !(checkValidImageExtension(url) && checkValidImageProtocol(url));
    } catch (ex) {
        return true;
    }
};

export const convertToFormData = obj => {
    const formData = new FormData();

    Object.keys(obj).forEach(key => {
        if (key === "images") {
            obj.images.forEach((file, index) => {
                formDataToSend.append(`images[${index}]`, file);
            });
        } else if (key === "amenities" || (key === "media" && typeof obj[key] === "object")) {
            formData.append(key, JSON.stringify(obj[key]));
        } else {
            formData.append(key, obj[key]);
        }
    });
    return formData;
};

// Function to get the ordinal suffix for a day
const getOrdinalSuffix = day => {
    if (day > 3 && day < 21) return "th"; // covers 4-20
    switch (day % 10) {
        case 1:
            return "st";
        case 2:
            return "nd";
        case 3:
            return "rd";
        default:
            return "th";
    }
};

// Format the date
export const formatDateWithSuffix = dateObj => {
    const date = new Date(dateObj);

    const day = format(date, "d"); // get the day without leading zeros
    const monthYear = format(date, "MMMM, yyyy"); // get the month and year
    const ordinalSuffix = getOrdinalSuffix(parseInt(day)); // get the ordinal suffix
    return `${day}${ordinalSuffix} ${monthYear}`;
};

// Calculate the number of days left
export const daysLeft = dateObj => {
    const date = new Date(dateObj);
  const daysLeft = differenceInCalendarDays(date, new Date());

    return daysLeft < 10 ? `0${daysLeft} days` : `${daysLeft.toString()} days`;
    // console.log(formatDistanceToNow(date));
    // return formatDistanceToNow(date, {addSuffix: false});
};
export const convertDateToISO = (dateStr) => {
    const [day, month, year] = dateStr.split("/");
    return `${year}-${month}-${day}`;
  };

