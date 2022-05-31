import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab';
import { GET } from '../HttpMethods/GET';
import { POST } from '../HttpMethods/Post';


export const TabMethods = () =>{
    return(
        <div>
            <Tabs defaultActiveKey="GET" transition={true} className="mb-3">
                <Tab style={{'color':'red'}} eventKey="MEthods" title="Methods" disabled/>
                <Tab eventKey="GET" title="GET">
                    <GET name={'get'}/>
                </Tab>
                <Tab eventKey="POST" title="POST">
                    <POST name={'post'}/>
                </Tab>
                <Tab eventKey="PATCH" title="PATCH">
                <POST name={'patch'}/>
                </Tab>
                <Tab eventKey="DELETE" title="DELETE">
                <POST name={'delete'}/>
                </Tab>
                <Tab eventKey="PUT" title="PUT">
                <POST name={'put'}/>
                </Tab>
            </Tabs>
        </div>
    )
}
