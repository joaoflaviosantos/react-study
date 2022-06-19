import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

import { ConfigProvider } from 'antd'
import ptBR from 'antd/lib/locale/pt_BR'
import 'antd/dist/antd.min.css' // https://github.com/ant-design/ant-design/issues/33327#issuecomment-997355323

// import reportWebVitals from './reportWebVitals'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <React.StrictMode>
        <ConfigProvider locale={ptBR}>
            <App />
        </ConfigProvider>
    </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals()
