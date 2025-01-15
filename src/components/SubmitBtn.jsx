import { useNavigate } from "react-router-dom"


const SubmitBtn = ({text}) => {
  const navigation = useNavigate()
  const isSubmiting = navigation.state === 'submiting'

  return (
    <button type="submit" className="btn btn-primary btn-block" disabled={isSubmiting}>
      {isSubmiting?<>
      <span className="loading loading-spinner">sending ....</span>
      </>:
      text  || 'submit'
      }
    </button>
  )
}

export default SubmitBtn