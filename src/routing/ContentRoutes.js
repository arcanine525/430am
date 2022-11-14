import {Fragment} from 'react'
import Alert from '../components/Alert'
import {Route, Routes} from 'react-router-dom'
import PsqiSurvey from '../pages/PsqiSurvey'
import About from '../pages/About'
import Guide from '../pages/Guide'
import Library from '../pages/Library'
import Profile from '../pages/Profile'
import Policy from '../pages/Policy'
import TermsConditions from '../pages/TermsConditions'

const ContentRoutes = () => {
  return (
    <Fragment>
      <Routes>
        <Route path={'/'} element={<PsqiSurvey />} />
        {/* <Route path={'/about'} element={<About />} /> */}
        {/* <Route path={'/guide'} element={<Guide />} /> */}
        {/* <Route path={'/profile'} element={<Profile />} /> */}
        {/* <Route path={'/library'} element={<Library />} /> */}
        {/* <Route path={'/policy'} element={<Policy />} /> */}
        {/* <Route path={'/terms_and_conditions'} element={<TermsConditions />} /> */}
      </Routes>
      <Alert />
    </Fragment>
  )
}

export default ContentRoutes
