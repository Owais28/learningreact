import React from 'react'
import Container from '../styles/Container.styled'
import { Section } from '../styles/Sections.styled'
import ShowNotification from './ShowNotification'
import {HeadingTwo} from '../styles/Headings.styled'

export default function ConditionalRendering(props) {
    const isLoggedIn = props.isLoggedIn;
  return (
    <Section>
        <Container>
            <ShowNotification />
            <HeadingTwo>
                You are {isLoggedIn ? 'currently' : 'not'} Logged in.
            </HeadingTwo>
            <WarningBanner warn={false}/>
        </Container>
    </Section>
  )
}

const WarningBanner = (props) => {
    if(!props.warn){
        return null
    }

    return <div className='warning'>
        Warning    
    </div>

}
