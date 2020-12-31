import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import App from './App'
import Admin from './pages/Admin'
import Buttons from './pages/home/ui/button/button'
import Home from './pages/home/home'
import Modals from './pages/home/ui/modals/modals'
import Spins from './pages/home/ui/Spin/Spin'
import Notifications from './pages/home/ui/notification/notification'
import Messages from './pages/home/ui/message/message'
import FilterForm from './pages/city/city'
import RichEditor from './pages/rich/rich'
import Order from './pages/order/order'
import OrderDetail from './pages/order/orderdetail'
import Carousels from './pages/home/ui/carousel/carousel'
import Tablebasic from './pages/home/ui/tablebasic/tablebasic'
import Tablehigh from './pages/home/ui/tablehigh/tablehigh'
import Nomatch from './pages/noMatch/noMatch'
import Common from './pages/common'
import Line from './pages/charts/line'
import Bar from './pages/charts/bar'
import Pic from './pages/charts/pic'

export default class Irouter extends React.Component {
	render() {
		return (
			<Router>
				<App>
				<Switch>
						<Route
							path="/common"
							render={() => (
								<Common>
									<Route
										exact
										path="/common/order/detail/:orderId"
										component={OrderDetail}
									></Route>
								</Common>
							)}
						></Route>
					<Route
						path="/"
						render={() => {
							return (
								<Admin>
									<Switch>
										<Route exact
											path="/home"
											component={Home}
										></Route>
										<Route
											path="/home/ui/buttons"
											component={Buttons}
										/>
										<Route
											path="/home/ui/modals"
											component={Modals}
										/>
                                        <Route
                                            path="/home/ui/loading"
                                            component={Spins}
                                        />
                                        <Route
                                            path="/home/ui/notification"
                                            component={Notifications}
                                        />
                                        <Route
                                            path="/home/ui/message"
                                            component={Messages}
                                        />
                                        <Route
                                            path="/home/ui/carousel"
                                            component={Carousels}
                                        />
										   <Route
                                            path="/home/city"
                                            component={FilterForm}
                                        />
										   <Route
                                            path="/home/rich"
                                            component={RichEditor}
                                        />
										<Route
											path="/home/order"
											component={Order}
											/>

                                        <Route
                                            path="/home/table/basic"
                                            component={Tablebasic}
                                        />
                                        <Route
                                            path="/home/table/high"
                                            component={Tablehigh}
                                        />
										<Route
                                            path="/home/charts/line"
                                            component={Line}
                                        />
										<Route
                                            path="/home/charts/bar"
                                            component={Bar}
                                        />
										<Route
                                            path="/home/charts/pic"
                                            component={Pic}
                                        />
										<Route component={Nomatch}></Route>
									</Switch>
								</Admin>
							)
						}}
					/>
                    </Switch>
				</App>
			</Router>
		)
	}
}
