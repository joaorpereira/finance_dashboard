import { Switch, Route } from 'react-router-dom'
import Dashboard from '../screens/Dashboard'
import SignIn from '../screens/SignIn'
import Entradas from '../screens/Entradas'
import Saidas from '../screens/Saidas'

export default function Routes() {
  return (
    <Switch>
      <Route exact path={['/', '/dashboard']} component={Dashboard} />
      <Route path={'/entradas'} component={Entradas} />
      <Route path={'/saidas'} component={Saidas} />
      <Route path={'/login'} component={SignIn} />
      <Route path={'/signup'} component={Dashboard} />
    </Switch>
  )
}
