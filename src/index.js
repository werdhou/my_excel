import { Excel } from './components/Excel'
import { Formula } from './components/Formula'
import { Header } from './components/Header'
import { Table } from './components/Table'
import { Toolbar } from './components/Toolbar'
import './style/index.scss'


const excel = new Excel('#app', {
    components: [Header, Toolbar, Formula, Table]
})

excel.render()