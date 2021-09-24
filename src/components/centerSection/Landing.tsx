import React from 'react';

type MainProps = {
    // clearToken: () => void
}

type MainState = {

}

export class Landing extends React.Component<MainProps, MainState> {
    constructor(props: MainProps) {
        super(props)
        this.state = {

        }
    }
    render() {
        return (
            <div>
                Main Page for all the heros or villains
            </div>
        )
    }
}

export default Landing;
