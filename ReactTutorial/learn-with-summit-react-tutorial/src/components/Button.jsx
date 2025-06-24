import React from 'react';

export default class Button extends React.Component {

    shouldComponentUpdate(nextProps){
        const { change: currentChange, locale: currentLocale } = this.props;

        const { change: nextChange, locale: nextLocale} = nextProps;
        
        if(currentChange === nextChange && nextLocale === currentLocale){
            return false;
        }
        
        //that means "Re-render" the Button Class/ calls the "render()" function
        return true;
    }

    render() {
        console.log('button component rendered');
        const { changeFunc, locale, showButton, enable } = this.props;
        if (!enable) return null;

        return (
            <>
                <button type="button" onClick={() => changeFunc(locale)}>
                    {locale === 'bn-BD' ? 'Change Clock' : 'গড়ি পরিবর্তন করুন'}
                </button>
                {showButton && <p>Hello</p>}
            </>
        );
    }
}