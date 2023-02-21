import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
const CreatePage = () => {
  const validate = values => {
    const errors = {
      피부상태: "",
      수면시간: "",
      운동시간: "",
    }
    const errorType = ["피부상태","수면시간","운동시간"]

    {
      errorType.forEach((err)=>{
        if(!values)
      });
    }
    return errors
  }
    return(
        <Form>
          <div className='form-group' style={{width : "300px"}}>
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
          </div>
          
       
        
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    )
}
export default CreatePage; 