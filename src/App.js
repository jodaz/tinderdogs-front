import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';
import {
    Route,
    Routes,
    useLocation
} from 'react-router-dom'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import esLocale from 'date-fns/locale/es';
// Layouts
import AppLayout from './layouts/App';
import LandingLayout from './layouts/LandingLayout';
// Pages
import NotFound from "./pages/NotFound";
import Landing from "./pages/Landing";
import Home from "./pages/Home";
import Login from './components/Login';
import SignUp from './components/SignUp';
import RecoverPassword from './components/RecoverPassword';
import Intro from './pages/Intro';
import DetectLocation from './components/Modals/DetectLocation';
import Market from './pages/Market';
import Blog from './pages/Blog';
import Profile from './pages/Profile';
import Chat from './pages/Chat';
import NewPassword from './components/Modals/NewPassword';
import AskCode from './components/Modals/AskCode';
import Notifications from './pages/Notifications'
import CreateProfileWelcome from './components/CreateProfileWelcome';
import Business from './pages/Business';
import RegisterBusiness from './components/Modals/RegisterBusiness';
// Contexts
import { AuthProvider } from './context/AuthContext'

function App() {
    let location = useLocation();

    return (
        <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={esLocale}>
            <ThemeProvider theme={theme}>
                <AuthProvider>
                    <Routes>
                        <Route
                            path='*'
                            element=<NotFound />
                        />
                        <Route
                            path='/home'
                            element={
                                <AppLayout>
                                    <Home />
                                </AppLayout>
                            }
                        />
                        <Route
                            path='/market'
                            element={
                                <AppLayout>
                                    <Market />
                                </AppLayout>
                            }
                        />
                        <Route
                            path='/chat'
                            element={
                                <AppLayout>
                                    <Chat />
                                </AppLayout>
                            }
                        />
                        <Route
                            path='/blog'
                            element={
                                <AppLayout>
                                    <Blog />
                                </AppLayout>
                            }
                        />
                        <Route
                            path='/profile'
                            element={
                                <AppLayout>
                                    <Profile />
                                </AppLayout>
                            }
                        />

                        <Route
                            path='/notifications'
                            element={
                                <AppLayout>
                                    <Notifications />
                                </AppLayout>
                            }
                        />

                        <Route path="/" element={
                            <LandingLayout>
                                <Landing />
                            </LandingLayout>
                        }>
                            <Route path="/login" element={<Login location={location} />} />
                            <Route path="/detect-location" element={<DetectLocation location={location} />} />
                            <Route path="/register" element={<SignUp location={location} />} />
                            <Route path="/recover-password" element={<RecoverPassword location={location} />} />
                            <Route path="/recover-password/new" element={<NewPassword location={location} />} />
                            <Route path="/recover-password/code" element={<AskCode location={location} />} />
                        </Route>
                        <Route path="/register/welcome" element={<CreateProfileWelcome location={location} />} />

                        <Route path="/business" element={
                            <LandingLayout dark>
                                <Business />
                            </LandingLayout>
                        }>
                            <Route path="/business/register" element={<RegisterBusiness location={location} />} />
                        </Route>

                        <Route path="/introduction" element={<Intro />} />
                    </Routes>
                </AuthProvider>
            </ThemeProvider>
        </LocalizationProvider>
    );
}

export default App;
