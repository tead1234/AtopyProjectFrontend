import { ResponsiveBump } from '@nivo/bump'

const MyResponsive = ({ data }) => (
    <ResponsiveBump
        data={data}
        xPadding={0.2}
        xOuterPadding={0.4}
        yOuterPadding={0.85}
        colors={{ scheme: 'spectral' }}
        lineWidth={9}
        activeLineWidth={6}
        inactiveLineWidth={3}
        inactiveOpacity={0.15}
        pointSize={17}
        activePointSize={16}
        inactivePointSize={0}
        pointColor={{ theme: 'background' }}
        pointBorderWidth={3}
        activePointBorderWidth={3}
        pointBorderColor={{ from: 'serie.color' }}
        axisTop={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: '',
            legendPosition: 'middle',
            legendOffset: -36
        }}
        axisBottom={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: '',
            legendPosition: 'middle',
            legendOffset: 32
        }}
        axisLeft={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: '수면시간',
            legendPosition: 'middle',
            legendOffset: -40
        }}
        margin={{ top: 40, right: 100, bottom: 40, left: 60 }}
        axisRight={null}
    />
)
export default MyResponsive;