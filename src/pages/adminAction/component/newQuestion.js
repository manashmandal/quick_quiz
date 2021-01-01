import React from "react"
import Drawer from "react-bottom-drawer"

import Button from './../../../core/button'
import NewQuestionForm from './newQuestionForm'

export default function NewQuestion() {
    const [isVisible, setIsVisible] = React.useState(false)
    const openDrawer = () => setIsVisible(true)
    const closeDrawer = () => setIsVisible(false)

    return (
        <div className="new-question">
            <center>
                <Button
                    classNameMod="open-modal"
                    handleClick={openDrawer}
                >
                    <span>Add new question</span>
                </Button>
            </center>
            <Drawer
                duration={250}
                hideScrollbars={true}
                onClose={closeDrawer}
                isVisible={isVisible}
            >
                <NewQuestionForm />
            </Drawer>
        </div>
    );
}