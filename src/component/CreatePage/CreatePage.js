import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
import { useState } from 'react';
const CreatePage = () => {
  const [values, setValues] = useState({
    date : new Date(),
    skinState: 0,
    morning : "",
    lunch : "",
    dinner : "",
    sleepTime: 0,
    exercise: 0,
  })


   const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    setValues((e) => ({
      ...values,
      skinState: form.skinState.value,
      morning: form["morning-food"].value, 
      lunch: form["lunch-food"].value,
      dinner: form["dinner-food"].value,
      sleepTime: form.sleepTime.value,
      exercise: form.exercise.value 
    }))
    // 에러 값을 설정하고
    // 잘못된 값이면 제출 처리를 중단한다.
    
    setValues((values) => (console.log(values)));
    alert(JSON.stringify(values, null))
  }
    return(
      <div className='Modal'>
          <Form  onSubmit={handleSubmit}>
          <div className='model-body'>
          <Form.Group className="form-control" controlId="formSkinState">
          <Form.Label>피부상태</Form.Label>
          <Form.Control type= "text" name='skinState'/>
          <Form.Label>아침식사</Form.Label>
          <Form.Control type="text" name = "morning-food"/>
          <Form.Label>점심식사</Form.Label>
          <Form.Control type="text" name = "lunch-food"/>
          <Form.Label>저녁식사</Form.Label>
          <Form.Control type="text" name = "dinner-food"/>
          <Form.Label>수면시간</Form.Label>
          <Form.Control type="text" name = "sleepTime"/>
          <Form.Label>운동시간</Form.Label>
          <Form.Control type="text" name = "exercise"/>
          </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
        </div>
      </Form>
      </div>
        
    )
}
export default CreatePage; 