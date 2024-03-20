import { useState } from 'react'
import Tab from './components/Tab'
import Display from './components/Display'
import './App.css'

function App() {

  const tabList = [ 
    {title: "Tab 1", content: "Tab 1 content is showing here."},
    {title: "Tab 2", content: "Tab 2 content is showing here."},
    {title: "Tab 3", content: "Tab 3 content is showing here."}
  ]

  const [tabIndex, setTabIndex] = useState(0);

  const [tabs, setTabs] = useState(tabList);

  return (
    <>
      <Tab tabs={tabs} tabIndex={tabIndex} setTabIndex={setTabIndex}/>
      <Display tabs={tabs} tabIndex={tabIndex} />
    </>
  )
}

export default App
