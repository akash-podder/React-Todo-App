import React from "react";
import Button from "./Button";

class Clock extends React.Component {
    constructor(props){
        super(props)
        this.state = {date: new Date(), myLocale: 'bn-BD'};
    }

    // This function will be Triggered after DOM operation of Mounting/ "render()" function finishes it's job
    componentDidMount(){
        this.clockTimer = setInterval(() => this.tick(), 1000); //here Anyonymous Function is USED so that we can refer with "this" KEYWORD of the object
    }

    // This function will be Triggered if we Change the PAGE/Route to different Page, at that time we have REMOVE the Clock, so that it doesn't use CPU power in the background
    componentWillUnmount() {
        clearInterval(this.clockTimer);
    }

    // after Button Click this Function will be triggered
    // here Anyonymous Function is USED so that we can refer with "this" KEYWORD of the object
    handleClick = (locale) => {
        this.setState({
            myLocale: locale,
        });
    };

    tick() {
        this.setState({
            date: new Date(),
        });
    }

    render() {
        console.log('clock rendered');
        const { date, myLocale } = this.state

        return (
            <div>
                <h1 className="heading">
                    <span className="text">
                        {date.toLocaleTimeString(myLocale)}
                    </span>
                </h1>
                {myLocale === 'bn-BD'? (
                    <Button changeFunc={this.handleClick} locale="en-US" showButton={true} enable={true}/>
                ) : (
                    <Button changeFunc={this.handleClick}  locale="bn-BD" showButton enable />
                )}
                
            </div>
        )
    }
}

export default Clock;