import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useNavigate } from "react-router-dom";


const EditPost = () => {
  const { id } = useParams();
  const navigate = useNavigate()

  const [state, setState] = useState({
    symbol: '',
    topic: '',
    description: '',
    postCategory: '',
    side: '',
    status: ''
    
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setState({
      ...state,
      [name]: value,
    });
  };
  const handleSelectSymbol = (symbol) => {
    setState({
      ...state,
      symbol: symbol,
    });
  };
  const handleSelectSide = (side) => {
    setState({
      ...state,
      side: side,
    });
  };
  const handleSelectStatus = (status) => {
    setState({
      ...state,
      status: status,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const data = {
      symbol: state.symbol,
      topic: state.topic,
      description: state.description,
      postCategory: state.postCategory,
      side: state.side,
      status: state.status,
    };

    axios.put(`/post/update/${id}`, data).then((res) => {
      if (res.data.success) {
        alert('Post Updated Successfully');
        setState({
          symbol: '',
          topic: '',
          description: '',
          postCategory: '',
          side: '',
          status: '',
        });
        navigate('/home')
      }
    });
  };

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const res = await axios.get(`/post/${id}`);
        if (res.data.success) {
          const { symbol, topic, description, postCategory, side, status } = res.data.post;
          setState({
            symbol,
            topic,
            description,
            postCategory,
            side,
            status,
          });
        }
      } catch (error) {
        console.error('Error fetching post:', error);
      }
    };

    fetchPost();
  }, [id]);

  





  return (
    <div className="col-md-8 mt-4 mx-auto">
      <h1 className="h3 mb-3 font-weight-normal">Edit Post</h1>
      <form className="needs-validation" noValidate>
      <div className="dropdown" style={{ marginBottom: '15px' }}>
        <label style={{ marginBottom: '5px' }}>Symbol</label>
        <div>
          <button
            className="btn btn-danger dropdown-toggle"
            type="button"
            style={{ marginBottom: '15px' }}
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            {state.symbol || 'Select Symbol'}
          </button>
          <ul className="dropdown-menu">
            <li>
              <a
                className="dropdown-item"
                href="#"
                onClick={() => handleSelectSymbol('MSI')}
                
              >
                MSI
              </a>
            </li>
            <li>
              <a
                className="dropdown-item"
                href="#"
                onClick={() => handleSelectSymbol('Asus')}
                
              >
                Asus
              </a>
            </li>
            <li>
              <a
                className="dropdown-item"
                href="#"
                onClick={() => handleSelectSymbol('Dell')}
                
              >
                Dell
              </a>
            </li>
            <li>
              <a
                className="dropdown-item"
                href="#"
                onClick={() => handleSelectSymbol('HP')}
                
              >
                HP
              </a>
            </li>
            <li>
              <a
                className="dropdown-item"
                href="#"
                onClick={() => handleSelectSymbol('Lenovo')}
                
              >
                Lenovo
              </a>
            </li>
            <li>
              <a
                className="dropdown-item"
                href="#"
                onClick={() => handleSelectSymbol('Apple')}
                
              >
                Apple
              </a>
            </li>
            <li>
              <a
                className="dropdown-item"
                href="#"
                onClick={() => handleSelectSymbol('Acer')}
                
              >
                Acer
              </a>
            </li>
            <li>
              <a
                className="dropdown-item"
                href="#"
                onClick={() => handleSelectSymbol('Samsung')}
                
              >
                Samsung
              </a>
            </li>
            <li>
              <a
                className="dropdown-item"
                href="#"
                onClick={() => handleSelectSymbol('Microsoft')}
                
              >
                Microsoft
              </a>
            </li>
            <li>
              <a
                className="dropdown-item"
                href="#"
                onClick={() => handleSelectSymbol('GIGABYTE')}
                
              >
                GIGABYTE
              </a>
            </li>
          </ul>
        </div>
      </div>

      
        <div className="form-group" style={{ marginBottom: '15px' }}>
          <label style={{ marginBottom: '5px' }}>Username</label>
          <input
            type="text"
            className="form-control"
            name="topic"
            placeholder="Enter Username"
            value={state.topic}
            onChange={handleInputChange}
          />
        </div>

        <div className="form-group" style={{ marginBottom: '15px' }}>
          <label style={{ marginBottom: '5px' }}>Size</label>
          <input
            type="text"
            className="form-control"
            name="description"
            placeholder="Enter Size"
            value={state.description}
            onChange={handleInputChange}
          />
        </div>

        <div className="form-group" style={{ marginBottom: '15px' }}>
          <label style={{ marginBottom: '5px' }}>Price</label>
          <input
            type="text"
            className="form-control"
            name="postCategory"
            placeholder="Enter Price"
            value={state.postCategory}
            onChange={handleInputChange}
          />
        </div>


        <div className="dropdown" style={{ marginBottom: '15px' }}>
        <label style={{ marginBottom: '5px' }}>Side</label>
        <div>
          <button
            className="btn btn-danger dropdown-toggle"
            type="button"
            style={{ marginBottom: '15px' }}
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            {state.side || 'Select Side'}
          </button>
          <ul className="dropdown-menu">
            
            <li>
              <a
                className="dropdown-item"
                href="#"
                onClick={() => handleSelectSide('BUY')}
                

              >
                BUY
              </a>
            </li>
            <li>
              <a
                className="dropdown-item"
                href="#"
                onClick={() => handleSelectSide('SELL')}
                

              >
                SELL
              </a>
            </li>
          </ul>
        </div>
        </div>



        <div className="dropdown" style={{ marginBottom: '15px' }}>
        <label style={{ marginBottom: '5px' }}>Order Status</label>
        <div>
          <button
            className="btn btn-danger dropdown-toggle"
            type="button"
            style={{ marginBottom: '15px' }}
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            {state.status || 'Select Status'}
          </button>
          <ul className="dropdown-menu">
            <li>
              <a
                className="dropdown-item"
                href="#"
                onClick={() => handleSelectStatus('NEW')}
                
              >
                NEW
              </a>
            </li>
            <li>
              <a
                className="dropdown-item"
                href="#"
                onClick={() => handleSelectStatus('CANCEL')}
                
              >
                CANCEL
              </a>
            </li>
            <li>
              <a
                className="dropdown-item"
                href="#"
                onClick={() => handleSelectStatus('MATCHED')}
                
              >
                MATCHED
              </a>
            </li>
            <li>
              <a
                className="dropdown-item"
                href="#"
                onClick={() => handleSelectStatus('FAILED')}
                
              >
                FAILED
              </a>
            </li>
          </ul>
        </div>
      </div>


        <button
          className="btn btn-success"
          type="submit"
          style={{ marginBottom: '15px' }}
          onClick={onSubmit}
        >
          <i className="far fa-check-square"></i>
          &nbsp; Update
        </button>
      </form>
    </div>
  );
};

export default EditPost;


// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useParams } from 'react-router-dom';

// const EditPost = () => {
//   const { id } = useParams();
//   const [state, setState] = useState({

//     topic: '',
//     description: '',
//     postCategory: '',
//   });

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setState({
//       ...state,
//       [name]: value,
//     });
//   };

//   const onSubmit = (e) => {
//     e.preventDefault();
//     const data = {
//       topic: state.topic,
//       description: state.description,
//       postCategory: state.postCategory,
//     };

//     axios.put(`/post/update/${id}`, data).then((res) => {
//       if (res.data.success) {
//         alert('Post Updated Successfully');
//         setState({
//           topic: '',
//           description: '',
//           postCategory: '',
//         });
//       }
//     });
//   };

//   useEffect(() => {
//     const fetchPost = async () => {
//       try {
//         const res = await axios.get(`/post/${id}`);
//         if (res.data.success) {
//           const { topic, description, postCategory } = res.data.post;
//           setState({
//             topic,
//             description,
//             postCategory,
//           });
//         }
//       } catch (error) {
//         console.error('Error fetching post:', error);
//       }
//     };

//     fetchPost();
//   }, [id]);

//   return (
//     <div className="col-md-8 mt-4 mx-auto">
//       <h1 className="h3 mb-3 font-weight-normal">Edit Post</h1>
//       <form className="needs-validation" noValidate>

        
//         <div class="dropdown" style={{ marginBottom: '15px' }}>
//           <label style={{ marginBottom: '5px' }}>Symbol</label>
//           <div>
//           <button class="btn btn- dropdown-toggle" type="button" style={{ marginBottom: '15px' }} data-bs-toggle="dropdown" aria-expanded="false">
//            Select Symbol
//           </button>
//           <ul class="dropdown-menu">
//             <li><a class="dropdown-item" href="#">Action</a></li>
//             <li><a class="dropdown-item" href="#">Another action</a></li>
//             <li><a class="dropdown-item" href="#">Something else here</a></li>
//           </ul>
//           </div>
//         </div>

//         <div className="form-group" style={{ marginBottom: '15px' }}>
//           <label style={{ marginBottom: '5px' }}>Topic</label>
//           <input
//             type="text"
//             className="form-control"
//             name="topic"
//             placeholder="Enter Topic"
//             value={state.topic}
//             onChange={handleInputChange}
//           />
//         </div>

//         <div className="form-group" style={{ marginBottom: '15px' }}>
//           <label style={{ marginBottom: '5px' }}>Description</label>
//           <input
//             type="text"
//             className="form-control"
//             name="description"
//             placeholder="Enter Description"
//             value={state.description}
//             onChange={handleInputChange}
//           />
//         </div>

//         <div className="form-group" style={{ marginBottom: '15px' }}>
//           <label style={{ marginBottom: '5px' }}>Post Category</label>
//           <input
//             type="text"
//             className="form-control"
//             name="postCategory"
//             placeholder="Enter Post Category"
//             value={state.postCategory}
//             onChange={handleInputChange}
//           />
//         </div>
//         <button
//           className="btn btn-success"
//           type="submit"
//           style={{ marginBottom: '15px' }}
//           onClick={onSubmit}
//         >
//           <i className="far fa-check-square"></i>
//           &nbsp; Update
//         </button>
//       </form>
//     </div>
//   );
// };

// export default EditPost;


// import React, { Component } from 'react'
// import axios from 'axios';

// export default class EditPost extends Component {
//   constructor(props){
//     super(props);
//     this.state={
//       topic:"",
//       description:"",
//       postCategory:""
//     };
//   }
// handleInputChange=(e)=>{
//   const {name,value}=e.target;
//   this.setState({
//     ...this.state,
//     [name]:value
//   })
// }


// onSubmit=(e)=>{
//   e.preventDefault();
//   const id = this.props.match.params.id;

//   const {topic,description,postCategory}=this.state;
//   const data={
//     topic:topic,
//     description:description,
//     postCategory:postCategory
//   }
//   console.log(data)
//   axios.put(`/post/update/${id}`,data).then(res=>{
//     if(res.data.success){ //if success is true
//       alert("Post Updated Successfully")
//       this.setState(
//         {
//           topic:"",
//           description:"",
//           postCategory:""
//         }
//       )
  
//     }
//   });

// }
// componentDidMount(){
//   // this.retrievePosts();
//   const id = this.props.match.params.id;
//   axios.get(`/post/${id}`).then(res=>{
//     if(res.data.success){ //if success is true
//       this.setState({
//         topic:res.data.post.topic,
//         description:res.data.description,
//         postCategory:res.data.post.postCategory
//       });
//       console.log(this.state.post);
//     }
//   });
// }

//   render() {
//     return (
//       <div className="col-md-8 mt-4 mx-auto">
//         <h1 className="h3 mb-3 font-weight-normal">CEdit Post</h1>
//         <form className="needs-validation" noValidate>
//           <div className="form-group" style={{marginBottom:'15px'}}>
//             <label style={{marginBottom:'5px'}}>Topic</label>
//             <input type="text"
//             className="form-control"
//             name="topic"
//             placeholder="Enter Topic"
//             value={this.state.topic}
//             onChange={this.handleInputChange}/>
//           </div>

//           <div className="form-group" style={{marginBottom:'15px'}}>
//             <label style={{marginBottom:'5px'}}>Description</label>
//             <input type="text"
//             className="form-control"
//             name="description"
//             placeholder="Enter Description"
//             value={this.state.description}
//             onChange={this.handleInputChange}/>
//           </div>

//           <div className="form-group" style={{marginBottom:'15px'}}>
//             <label style={{marginBottom:'5px'}}>Post Category</label>
//             <input type="text"
//             className="form-control"
//             name="postCategory"
//             placeholder="Enter Post Category"
//             value={this.state.postCategory}
//             onChange={this.handleInputChange}/>
//           </div>
//           <button className="btn btn-success" type="submit" style={{marginBottom:'15px'}} onClick={this.onSubmit}>
//             <i className="far fa-check-square"></i>
//             &nbsp; Update
//           </button>
          
//         </form>

//       </div>
//     )
//   }
// }
// 