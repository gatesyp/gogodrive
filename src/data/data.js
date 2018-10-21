import moment from 'moment';

const data = [
  {
    id: "uniqueid1",
    name: 'Summit Drive, Kent, Ohio',
    amount: '8 Minutes',
    date: moment(),
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
    items: [
      {
        name: 'Abrupt Stops',
        amount: '6',
      },
      {
        name: 'Abrupt Accelerations',
        amount: '2',
      },
      {
        name: 'Swerving Instances',
        amount: '5',
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
    amount: '20 Minutes',
    date: moment(),
    items: [
      {
        name: 'Abrupt Stops',
        amount: '7',
      },
      {
        name: 'Abrupt Accelerations',
        amount: '3',
      },
      {
        name: 'Swerving Instances',
        amount: '1',
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
];

// 1 abrupt stop per 10 minutes,
// 1 acceleration per 10 minutes,
// 1 swerve no matter what man

export default data;
