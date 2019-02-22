import React from 'react'
import SegmentOne from './segments/SegmentOne'
import SegmentTwo from './segments/SegmentTwo'
import SegmentThree from './segments/SegmentThree'


export const segmentContent = {
    segmentOne: {
        title: "Hello React!",
        content: <SegmentOne />
    },
    segmentTwo: {
        title: "Number of Lorem Ipsum paragraphs: ",
        content: <SegmentTwo />
    },
    segmentThree: {
        title: "Login",
        content: <SegmentThree />
    }
}