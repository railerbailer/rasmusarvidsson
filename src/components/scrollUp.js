import React from "react";
import ScrollUpButton from "react-scroll-up-button"; //Add this line Here
 
export default class Index extends React.Component {
    render() {
        return (
            <div>
                <ScrollUpButton 
                 StopPosition={0} 
			      TransitionBtnPosition={150} 
			      EasingType='easeOutCubic' 
			      AnimationDuration={500} 
			      ContainerClassName='ScrollUpButton__Container'
			      TransitionClassName='ScrollUpButton__Toggled'
			     />
              {/*  //This is all you need to get the default view working*/}
            </div>
        );
    }
}