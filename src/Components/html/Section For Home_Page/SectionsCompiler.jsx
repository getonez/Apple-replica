/* eslint-disable react/jsx-pascal-case */
import React from 'react'
import Apple_alert from './Alert/Apple-alert'
import Apple_first_section from './First/Apple-first-section';
import Apple_second_section from './Second/Apple-second-section';
import Apple_third_section from './Third/Apple-third-section';
import Apple_fourth_section from './Fourth/Apple-fourth-section';
import Apple_fifth_section from './Fifth/Apple-fifth-section';
import Apple_sixth_section from './Sixth/Apple-sixth-section';
import Youtubevideos from './Youtube_Videos/Youtubevideos';

const SectionsCompiler = () => {
  return (
    <div>
        <Apple_alert />
        <Apple_first_section />
        <Apple_second_section />
        <Apple_third_section />
        <Apple_fourth_section />
        <Apple_fifth_section />
        <Apple_sixth_section />
        {/* <Youtubevideos /> */}
    </div>
  )
}

export default SectionsCompiler;