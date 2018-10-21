import moment from 'moment'

const data = 
[
    {
        id: "uniqueid1",
        name: 'Summit Drive, Kent, Ohio',
        amount: '8 Minutes',
        date: moment(),
        route: [
            { latitude: 41.14321399049558, longitude: -81.36968527142835 },
            { latitude: 41.150162023635076, longitude: -81.36097345654798 },
            { latitude: 41.15003276462342, longitude: -81.35130877571527 },
            { latitude: 41.14295544482316, longitude: -81.34006495552484 },
            { latitude: 41.1419533, longitude: -81.33757609999998 },
            { latitude: 41.137121, longitude: -81.313482 },
        ],
        pois: [
            {
                title: "Abrupt Stop",
                coord: {longitude: -81.32154217419503, latitude: 41.13912127714656},
            },
            {
                title: "Abrupt Stop",
                coord: {longitude: -81.36894990114362, latitude: 41.1432584553051},
            },
            {
                title: "Abrupt Stop",
                coord: {longitude: -81.36711870133026, latitude: 41.14463745669511},
            },
            {
                title: "Abrupt Stop",
                coord: {longitude: -81.35460550260575, latitude: 41.14977015028816},
            },
            {
                title: "Abrupt Stop",
                coord: {longitude: -81.34758590332136, latitude: 41.14762519355918},
            },
            {
                title: "Abrupt Stop",
                coord: {longitude: -81.32927390518793, latitude: 41.14027051948037},
            },
            {
                title: "Abrupt Acceleration",
                coord: {longitude: -81.36457536980846, latitude: 41.14754858428435},
            },
            {
                title: "Abrupt Acceleration",
                coord: {longitude: -81.36182857008855, latitude: 41.1486976789416},
            },
            {
                title: "Abrupt Acceleration",
                coord: {longitude: -81.3215631626934, latitude: 41.13884412228353},
            },
            {
                title: "Abrupt Acceleration",
                coord: {longitude: -81.33500996869947, latitude: 41.14134350977042},
            },
            {
                title: "Swerving Instance",
                coord: {longitude: -81.34822789118462, latitude: 41.14802244238609},
            },
            {
                title: "Swerving Instance",
                coord: {longitude: -81.32449243745633, latitude: 41.139044657936836},
            },
            {
                title: "Crash",
                coord: { latitude: 41.137121, longitude: -81.313482 },
            },
        ],
        items: [
            {
                name: 'Abrupt Stops',
                amount: '6',
            },
            {
                name: 'Abrupt Accelerations',
                amount: '4',
            },
            {
                name: 'Swerving Instances',
                amount: '2',
            },
            {
                name: 'Crashes',
                amount: '1',
            },
        ],
    },
    {
        id: "uniqueid2",
        name: 'Kent Road, Kent, Ohio',
        amount: '40 Minutes',
        date: moment(),
        route: [
            { "latitude": 41.285339, "longitude": -81.573857 },
            { "latitude": 41.2845, "longitude": -81.572355 },
            { "latitude": 41.277502, "longitude": -81.569566 },
            { "latitude": 41.276669, "longitude": -81.568587 },
            { "latitude": 41.274024, "longitude": -81.567085 },
            { "latitude": 41.267586, "longitude": -81.564576 },
            { "latitude": 41.266134, "longitude": -81.563289 },
            { "latitude": 41.262451, "longitude": -81.561186 },
            { "latitude": 41.260418, "longitude": -81.559684 },
            { "latitude": 41.258838, "longitude": -81.557967 },
            { "latitude": 41.256579, "longitude": -81.55728 },
            { "latitude": 41.254417, "longitude": -81.55625 },
            { "latitude": 41.251177, "longitude": -81.556551 },
            { "latitude": 41.246074, "longitude": -81.557881 },
            { "latitude": 41.241395, "longitude": -81.555013 },
            { "latitude": 41.241201, "longitude": -81.546601 },
            { "latitude": 41.238813, "longitude": -81.540121 },
            { "latitude": 41.238103, "longitude": -81.535787 },
            { "latitude": 41.236587, "longitude": -81.532353 },
            { "latitude": 41.234908, "longitude": -81.525272 },
            { "latitude": 41.233359, "longitude": -81.520595 },
            { "latitude": 41.231713, "longitude": -81.513771 },
            { "latitude": 41.231156, "longitude": -81.508372 },
            { "latitude": 41.231059, "longitude": -81.501505 },
            { "latitude": 41.232169, "longitude": -81.493994 },
            { "latitude": 41.233428, "longitude": -81.494338 },
            { "latitude": 41.244432, "longitude": -81.501633 },
            { "latitude": 41.254932, "longitude": -81.507685 },
            { "latitude": 41.254835, "longitude": -81.503952 },
            { "latitude": 41.254835, "longitude": -81.501548 },
            { "latitude": 41.254416, "longitude": -81.499274 },
            { "latitude": 41.251899, "longitude": -81.484339 },
            { "latitude": 41.251319, "longitude": -81.48155 },
            { "latitude": 41.249983, "longitude": -81.478658 },
            { "latitude": 41.246208, "longitude": -81.471019 },
            { "latitude": 41.245366, "longitude": -81.466818 },
            { "latitude": 41.24472, "longitude": -81.459479 },
            { "latitude": 41.24401, "longitude": -81.457419 },
            { "latitude": 41.242486, "longitude": -81.455114 },
            { "latitude": 41.239905, "longitude": -81.45078 },
            { "latitude": 41.239905, "longitude": -81.450308 },
            { "latitude": 41.240001, "longitude": -81.437581 },
            { "latitude": 41.239872, "longitude": -81.411402 },
            { "latitude": 41.239679, "longitude": -81.368873 },
            { "latitude": 41.239184, "longitude": -81.350346 },
            { "latitude": 41.239797, "longitude": -81.349273 },
            { "latitude": 41.239408, "longitude": -81.348353 },
            { "latitude": 41.239344, "longitude": -81.345435 },
            { "latitude": 41.236972, "longitude": -81.345306 },
            { "latitude": 41.232196, "longitude": -81.345435 },
            { "latitude": 41.22984, "longitude": -81.343804 },
            { "latitude": 41.223413, "longitude": -81.343074 },
            { "latitude": 41.216413, "longitude": -81.341917 },
            { "latitude": 41.20592, "longitude": -81.338541 },
            { "latitude": 41.200187, "longitude": -81.336867 },
            { "latitude": 41.196551, "longitude": -81.337098 },
            { "latitude": 41.194484, "longitude": -81.338486 },
            { "latitude": 41.189702, "longitude": -81.344636 },
            { "latitude": 41.187764, "longitude": -81.346696 },
            { "latitude": 41.186633, "longitude": -81.347297 },
            { "latitude": 41.18381, "longitude": -81.347406 },
            { "latitude": 41.181387, "longitude": -81.346677 },
            { "latitude": 41.179734, "longitude": -81.347535 },
            { "latitude": 41.16762, "longitude": -81.354916 },
            { "latitude": 41.159936, "longitude": -81.359014 },
            { "latitude": 41.153797, "longitude": -81.362533 },
            { "latitude": 41.153764, "longitude": -81.364686 },
            { "latitude": 41.153609, "longitude": -81.371684 },
            { "latitude": 41.151282, "longitude": -81.377649 },
            { "latitude": 41.151864, "longitude": -81.387563 },
            { "latitude": 41.154223, "longitude": -81.395631 },
            { "latitude": 41.156632, "longitude": -81.405692 },
            { "latitude": 41.158054, "longitude": -81.415768 },
            { "latitude": 41.159411, "longitude": -81.43023 },
        ],
        pois: [
            {
                title: "Abrupt Stop",
                coord: {
                    "latitude": 41.15747748566105,
                    "longitude": -81.41434105132124,
                },
            },
            {
                title: "Abrupt Stop",
                coord: {
                    "latitude": 41.24734514919564,
                    "longitude": -81.47044325630988,
                },
            },
            {
                title: "Abrupt Stop",
                coord: {
                    "latitude": 41.15384386838818,
                    "longitude": -81.39745004646335,
                },
            },
            {
                title: "Abrupt Acceleration",
                coord: {
                    "latitude": 41.23827320398942,
                    "longitude": -81.43364501742374,
                },
            },
            {
                title: "Abrupt Acceleration",
                coord: {
                    "latitude": 41.21468027774557,
                    "longitude": -81.34195110940043,
                },
            },
        ],
        items: [
            {
                name: 'Abrupt Stops',
                amount: '3',
            },
            {
                name: 'Abrupt Accelerations',
                amount: '2',
            },
            {
                name: 'Swerving Instances',
                amount: '0',
            },
            {
                name: 'Crashes',
                amount: '0',
            },
        ],
    },
    {
        id: "uniqueid3",
        name: 'Call Road, Stow, Ohio',
        amount: '8 Minutes',
        date: moment(),
        route: [
            { "latitude": 41.231415, "longitude": -81.438026 },
            { "latitude": 41.231415, "longitude": -81.437297 },
            { "latitude": 41.231318, "longitude": -81.433992 },
            { "latitude": 41.231512, "longitude": -81.434164 },
            { "latitude": 41.232577, "longitude": -81.434464 },
            { "latitude": 41.232577, "longitude": -81.432361 },
            { "latitude": 41.232059, "longitude": -81.431345 },
            { "latitude": 41.228315, "longitude": -81.431388 },
            { "latitude": 41.228089, "longitude": -81.428298 },
            { "latitude": 41.223473, "longitude": -81.428255 },
            { "latitude": 41.21989, "longitude": -81.428384 },
            { "latitude": 41.218405, "longitude": -81.428856 },
            { "latitude": 41.217272, "longitude": -81.427216 },
            { "latitude": 41.217433, "longitude": -81.440262 },
            { "latitude": 41.207962, "longitude": -81.440298 },
            { "latitude": 41.200891, "longitude": -81.440555 },
            { "latitude": 41.199762, "longitude": -81.43768 },
            { "latitude": 41.195693, "longitude": -81.433431 },
            { "latitude": 41.188492, "longitude": -81.426608 },
            { "latitude": 41.188524, "longitude": -81.422042 },
            { "latitude": 41.188524, "longitude": -81.408953 },
            { "latitude": 41.188556, "longitude": -81.394533 },
        ],
        pois: [
            {
                title: "Abrupt Stop",
                coord: {
                    "latitude": 41.18829658508602,
                    "longitude": -81.41615550693686,
                },
            },
            {
                title: "Abrupt Acceleration",
                coord: {
                    "latitude": 41.20919148437963,
                    "longitude": -81.43975994349003,
                },
            },
            {
                title: "Abrupt Acceleration",
                coord: {
                    "latitude": 41.21351888273034,
                    "longitude": -81.44015665060513,
                },
            },
            {
                title: "Swerving Instance",
                coord: {
                    "latitude": 41.22411233607687,
                    "longitude": -81.427660185797,
                },
            },
        ],
        items: [
            {
                name: 'Abrupt Stops',
                amount: '1',
            },
            {
                name: 'Abrupt Accelerations',
                amount: '2',
            },
            {
                name: 'Swerving Instances',
                amount: '1',
            },
            {
                name: 'Crashes',
                amount: '0',
            },
        ],
    },
    {
        id: "uniqueid4",
        name: 'Broadway Street, Akron, Ohio',
        amount: '9 Minutes',
        date: moment(),
        route: [
            { "latitude": 41.071186, "longitude": -81.52272 },
            { "latitude": 41.071186, "longitude": -81.52272 },
            { "latitude": 41.074712, "longitude": -81.520274 },
            { "latitude": 41.080056, "longitude": -81.516346 },
            { "latitude": 41.083097, "longitude": -81.514952 },
            { "latitude": 41.08837, "longitude": -81.512913 },
            { "latitude": 41.091184, "longitude": -81.512913 },
            { "latitude": 41.095566, "longitude": -81.51263 },
            { "latitude": 41.098743, "longitude": -81.51145 },
            { "latitude": 41.102122, "longitude": -81.510849 },
            { "latitude": 41.102209, "longitude": -81.502259 },
            { "latitude": 41.105863, "longitude": -81.502209 },
            { "latitude": 41.105798, "longitude": -81.501136 },
        ],
        pois: [
            {
                title: "Crash",
                coord: {
                    "latitude": 41.071032932130095,
                    "longitude": -81.52205084455679,
                },
            },
        ],
        items: [
            {
                name: 'Abrupt Stops',
                amount: '0',
            },
            {
                name: 'Abrupt Accelerations',
                amount: '0',
            },
            {
                name: 'Swerving Instances',
                amount: '0',
            },
            {
                name: 'Crashes',
                amount: '1',
            },
        ],
    },
    {
        id: "uniqueid5",
        name: 'Main Street, Kent, Ohio',
        amount: '4 Minutes',
        date: moment(),
        route: [
            { "latitude": 41.153769, "longitude": -81.341844 },
            { "latitude": 41.153616, "longitude": -81.351185 },
            { "latitude": 41.153716, "longitude": -81.352873 },
            { "latitude": 41.153813, "longitude": -81.358281 },
            { "latitude": 41.153813, "longitude": -81.363388 },
            { "latitude": 41.153735, "longitude": -81.368556 },
            { "latitude": 41.15241, "longitude": -81.368642 },
            { "latitude": 41.152442, "longitude": -81.370745 },
        ],
        pois: [
            {
                title: "Abrupt Stop",
                coord: {
                    "latitude": 41.153584174809396,
                    "longitude": -81.34311147590822,
                },
            },
            {
                title: "Abrupt Acceleration",
                coord: {
                    "latitude": 41.153505397113236,
                    "longitude": -81.35064463253211,
                },
            },
            {
                title: "Abrupt Acceleration",
                coord: {
                    "latitude": 41.15228431088289,
                    "longitude": -81.3701052871438,
                },
            },
            {
                title: "Abrupt Acceleration",
                coord: {
                    "latitude": 41.15385990140973,
                    "longitude": -81.36461236043883,
                },
            },
            {
                title: "Swerving Instance",
                coord: {
                    "latitude": 41.153584174809396,
                    "longitude": -81.34740119169336,
                },
            },
            {
                title: "Swerving Instance",
                coord: {
                    "latitude": 41.153505397113236,
                    "longitude": -81.3513247107682,
                },
            },
        ],
        items: [
            {
                name: 'Abrupt Stops',
                amount: '1',
            },
            {
                name: 'Abrupt Accelerations',
                amount: '3',
            },
            {
                name: 'Swerving Instances',
                amount: '2',
            },
            {
                name: 'Crashes',
                amount: '0',
            },
        ],
    },
]

// 1 abrupt stop per 10 minutes,
// 1 acceleration per 10 minutes,
// 1 swerve no matter what man

export default data
