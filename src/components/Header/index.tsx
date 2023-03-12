import LogoImg from '@assets/logo.png'
import ProfileImg from '@assets/profile.png'

import {Container, Logo, Profile} from './styles'

export function Header (){

    return (
        <Container>
            <Logo source={LogoImg}/>
            <Profile  source={ProfileImg}/>
        </Container>
    )
}