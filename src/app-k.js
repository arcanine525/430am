import React, {useEffect} from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import {ChakraProvider} from '@chakra-ui/react'
import {Provider} from 'react-redux'

import store from './store'
// import {loadUser} from '../../public/static/js/store/actions/auth'
import {loadUser} from '../src/store/actions/auth'

// import setAuthToken from '../../public/static/js/utils/setAuthToken'
import setAuthToken from '../src/utils/setAuthToken'

import theme from '../src/theme/theme'

import './App.css'

import Home from '../src/pages/Home'
import ContentRoutes from '../src/routing/ContentRoutes'

// import ContentRoutes from '../../public/static/js/routing/ContentRoutes'
// import TdsModal from '../../public/static/js/components/modals/TdsModal'

import TdsModal from '../src/components/modals/TdsModal'
import axios from 'axios'

axios.defaults.baseURL = process.env.REACT_APP_BASEURL

if (localStorage.jwt) {
  setAuthToken(localStorage.jwt)
}

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser())
  }, [])

  return (
    <ChakraProvider theme={theme}>
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            {/* <Route path="/" element={<Home />} /> */}
            <Route path={'*'} element={<ContentRoutes />} />
          </Routes>
          <TdsModal />
        </BrowserRouter>
      </Provider>
    </ChakraProvider>
  )
}

export default App
