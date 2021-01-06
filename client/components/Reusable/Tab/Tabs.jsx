import React from 'react'

class Tabs extends React.Component  {

    
    // passes down to services
    // passes label up to parent
    // reassign state of activeLabel to a boolean
    // if service matches the label that was clicked, activeLabel is either true or false
    labelGetter = label => {
        this.props.data.forEach(obj => { //state
           return obj.activeLabel = obj.service === label
        })
        this.props.logLabelToParent(label) //from FeaturesSection(parent)
    }

    render() {
        const {
            props: {children, data},
        } = this;
        
        const Children = React.Children.map(children, child => {
           return React.cloneElement(child, {labelGetter: this.labelGetter, data})
        })

        return (
            Children
        )
    };
         
}
        
export default Tabs;