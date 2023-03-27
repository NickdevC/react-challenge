import React, { Component } from "react";

export class Content extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className={css.Content}>
                <div className={css.TitleBar}>

                </div>
                <div className={css.SearchResults}>

                </div>
            </div>
        )
    }
}