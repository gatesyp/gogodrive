import moment from 'moment';

const data = [
  {
    name: 'Summit Drive, Kent, Ohio',
    amount: '8 Minutes',
    date: moment(),
    isReceived: false,
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
    name: 'Kent Road, Kent, Ohio',
    amount: '10 Minutes',
    date: moment(),
    isReceived: true,
    items: [
      {
        name: 'Abrupt Stops',
        amount: '4',
      },
      {
        name: 'Abrupt Accelerations',
        amount: '8',
      },
      {
        name: 'Swerving Instances',
        amount: '3',
      },
      {
        name: 'Crashes',
        amount: '0',
      },
    ],
  },
  {
    name: 'Call Road, Stow, Ohio',
    amount: '8 Minutes',
    date: moment(),
    isReceived: true,
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
    name: 'Broadway Street, Akron, Ohio',
    amount: '20 Minutes',
    date: moment(),
    isReceived: false,
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
    name: 'Main Street, Kent, Ohio',
    amount: '4 Minutes',
    date: moment(),
    isReceived: true,
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

export default data;
