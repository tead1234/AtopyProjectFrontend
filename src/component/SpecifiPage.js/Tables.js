import Table from 'react-bootstrap/Table';

function Tables() {
    // api로 요청한 그동안 기록 값을 state로 받아와야됨
    
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>id</th>
          <th>날짜</th>
          <th>피부상태</th>
          <th>아침</th>
          <th>점심</th>
          <th>저녁</th>
          <th>수면시간</th>
          <th>운동시간</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
      </tbody>
    </Table>
  );
}

export default Tables;