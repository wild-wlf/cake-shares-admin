import SellerDetailBar from "@/components/atoms/SellerDetailBar/SellerDetailBar";
import PortfolioTable from "@/components/common/Portfolio/PortfolioTable";
import SellerTopBar from "@/components/common/SellerTopBar/SellerTopBar";
import SellerWallet from "@/components/common/SellerWallet/SellerWallet";
import {SellerContainer} from "@/styles/GlobalStyles.styles";
import React, { useState } from 'react';
import handIcon from '../_assets/handIcon.png';
import { useContextHook } from 'use-context-hook';
import { AuthContext } from '@/context/authContext';
import { LoadScript, Autocomplete } from '@react-google-maps/api';
import Field from '@/components/atoms/Field';

const Dashoard = () => {
  const { user } = useContextHook(AuthContext, v => ({
    user: v.user,
  }));
  const [searchValue, setSearchValue] = useState(''); // For Google Map Search Field
  const libraries = ['places'];
  const handlePlaceSelect = place => {
    if (place.geometry && place.geometry.location) {
      const newMarkerPosition = {
        lat: place.geometry.location.lat(),
        lng: place.geometry.location.lng(),
      };
      setSearchValue(place.formatted_address);
    }
  };
  const api = process.env.GOOGLE_API;
  return (
    <div>
      <LoadScript googleMapsApiKey={'AIzaSyB0gq-rFU2D-URzDgIQOkqa_fL6fBAz9qI'} libraries={libraries}>
        <Autocomplete
          className="map-list"
          onLoad={autocomplete =>
            autocomplete.addListener('place_changed', () => handlePlaceSelect(autocomplete.getPlace()))
          }>
          <div className="input map-input locate-input">
            <Field
              type="text"
              placeholder="Enter your delivery address here..."
              name="address"
              value={searchValue}
              onChange={e => setSearchValue(e.target.value)}
              parentClass="map-input-field"
            />
          </div>
        </Autocomplete>
      </LoadScript>
      {/* <SellerContainer>
                <SellerTopBar
                    title={`Welcome ${user?.fullName || user?.username}!`}
                    suffix={handIcon}
                    tagLine={"Let's explore what's new with your product today!"}
                />
                <SellerWallet />
                <SellerDetailBar sm={true} />
                <PortfolioTable title="My Portfolio" />
            </SellerContainer> */}
    </div>
  );
};

export default Dashoard;
