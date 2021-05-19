import { Redirect, useHistory } from 'react-router';
import Button from '../../components/button';
import { Container, Content } from './styles'

function Home({authenticated}) {


    const history = useHistory()

    const handleNavigation = (path) => {
        return history.push(path)
    }

    if(authenticated) {
        return <Redirect to="/dashboard"/>
    }

    return <Container>
        <Content>
            <h1>
                do<span>.</span>it
            </h1>
            <span>Organize your tasks easily!</span>
            <div>
                <Button onClick={()=> handleNavigation("/signup")} whiteSchema>Sign Up</Button>
                <Button onClick={()=> handleNavigation("/login")}>Login</Button>
            </div>
        </Content>
    </Container>  
}

export default Home;