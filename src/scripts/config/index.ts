// icons
import HomeIcon from '@material-ui/icons/Home';
import DashboardIcon from '@material-ui/icons/BarChartOutlined';
import SettingsIcon from '@material-ui/icons/SettingsOutlined';
import GitHubIcon from '@material-ui/icons/GitHub';
import PrivateIcon from '@material-ui/icons/LockOutlined';
import PublicIcon from '@material-ui/icons/LockOpenOutlined';

// components
import Home from '../pages/home/Home.react';
import Dashboard from '../pages/dashboard/Dashboard.react';
import Settings from '../pages/settings/Setting.react';

// interface
import RouteItem from '../model/RouteItem.model';

// define app routes
export const routes: Array<RouteItem> = [
    {
        key: "router-home",
        title: "Home",
        tooltip: "Home",
        path: "/",
        enabled: true,
        component: Home,
        icon: HomeIcon,
        appendDivider: true
    },
    {
        key: "router-dashboard",
        title: "Dashboard",
        tooltip: "Dashboard",
        path: "/dashboard",
        enabled: true,
        component: Dashboard,
        icon: DashboardIcon
    },
    {
        key: "router-gh",
        title: "GitHub",
        tooltip: "GitHub",
        enabled: true,
        icon: GitHubIcon,
        subRoutes: [
            {
                key: "router-gh-private",
                title: "Private Repos",
                tooltip: "Private Repos",
                path: "/gh/private",
                enabled: true,
                icon: PrivateIcon
            }
            , {
                key: "router-gh-public",
                title: "Public Repos",
                tooltip: "Public Repos",
                path: "/gh/public",
                enabled: false,
                icon: PublicIcon
            }
        ]
    },
    {
        key: "router-settings",
        title: "Settings",
        tooltip: "Settings",
        path: "/settings",
        enabled: true,
        component: Settings,
        icon: SettingsIcon
    },
]