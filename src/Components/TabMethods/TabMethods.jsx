import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab';
import { GET } from '../HttpMethods/GET';


export const TabMethods = () =>{
    return(
        <div>
            <Tabs defaultActiveKey="GET" transition={true} className="mb-3">
                <Tab style={{'color':'red'}} eventKey="MEthods" title="Methods" disabled/>
                <Tab eventKey="GET" title="GET">
                    <GET />
                </Tab>
                <Tab eventKey="POST" title="POST">
                    <h1>POST</h1>
                </Tab>
                <Tab eventKey="PATCH" title="PATCH">
                    <h1>PATCH</h1>
                </Tab>
                <Tab eventKey="DELETE" title="DELETE">
                    <h1>DELETE</h1>
                </Tab>
                <Tab eventKey="PUT" title="PUT">
                    <h1>PUT</h1>
                </Tab>
            </Tabs>
        </div>
    )
}
