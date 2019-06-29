import React, {Component} from 'react';
// import ReactDOM from 'react-dom';
// import {LinkContainer} from "react-router-bootstrap";
// import { link } from 'fs';
import axios,{post} from 'axios';
// import {MDBFileInput} from 'mdreact'

import { Container, Button, OverlayTrigger, Form, Image, Col,Row} from 'react-bootstrap';
// import { directive } from "@babel/types";

import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
// import { tsMethodSignature } from '@babel/types';

function imageFormatter(cell, row){
  return "<img width='30px' height='30px' src='"+cell+"'/>" ;
}


class Tables extends Component{
  constructor(props) {
    super(props);
    this.onChangeNama = this.onChangeNama.bind(this);
    this.onChangeAlamat = this.onChangeAlamat.bind(this);
    this.fileUpload = this.fileUpload.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.state = {
      posts:[],
      imgGuru: null,
      nama: '',
      alamat: '',
    }
    this.handleChange = this.handleChange.bind(this)
  }
        
        
        componentDidMount() {
          const url = "http://192.168.5.224:8080/api/guru";
          axios.get(url).then(response => response.data.values)
          .then((data)=>{
            this.setState({posts:data})
            console.log(data)
            console.log('jalan')
          })
        }

        handleChange(event){
          this.setState({imgGuru: URL.createObjectURL(event.target.files[0])})  
        }
        fileUpload(imgGuru){
          const url = 'http://192.168.5.224:8080/api/guru';
          const formData = new FormData();
          formData.append(this.handleChange,imgGuru)
          const config ={
            header:{
              'content-type': 'multipart/form-data'
            }
          }
          return post(url,formData,config)
        }
        onChangeNama(e){
          this.setState({
            nama : e.target.value
          });
        }
        onChangeAlamat(e){
          this.setState({
            alamat : e.target.value
          })
        }

        onSubmit(e){
          e.preventDefault();
          this.fileUpload(this.state.file).then((response)=>{
            console.log(response.data);
          })
          const obj ={
            nama : this.state.nama,
            alamat: this.state.alamat,
            imgGuru: this.state.imgGuru
          };
          axios.post('http://192.168.5.224:8080/api/guru', obj)
            .then(res => console.log(res.data));

            this.setState({
              nama: '',
              alamat: ''
            })
        }
       
        
    render(){
      const imgUpload={
        width:'50px',
        height: '50px'
      }
      const warna={
        background: '#FFFFFF',
        marginRight: '10px',
        

      }
      const pop={
        borderRadius : '10px',
        borderStyle : 'dotted',
        borderWidth: '2px'
      }
      const text={
        marginLeft: '10px',
        marginRight: '10px',
        width: '300px'
      }
      const text1={
        marginLeft:'15px',
        marginTop: '15px'
      }
      const buttonAdd={
        marginLeft: '10px',
        marginBottom: '10px',
        marginRight: '20px',

      }
      const buttonSbmt={
        marginLeft: '10px',
        marginBottom: '10px',
        marginRight: '10px',
        width: '300px'
      }
      const aaa={
          width :'40px'
      }
      const bb={
        marginRight: '10px'
      }

      const popover=(
        <popover id="popover-basic" title="Popover top" style={pop}>
           <Form style={warna}  onSubmit={this.onSubmit} >
            <Form.Group controlId="formBasicNama">
              <Form.Label style={text1}>Nama</Form.Label>
              <Form.Control style={text} type="text" placeholder="Masukan Nama" name="nama" value={this.state.nama} onChange={this.onChangeNama}/>
            </Form.Group>
            <Form.Group controlId="formBasicAlamat">
              <Form.Label style={text1}>Alamat</Form.Label>
              <Form.Control style={text} type="text" placeholder="Masukan Alamat" name="alamat" value={this.state.alamat}  onChange={this.onChangeAlamat} />
            </Form.Group>
            <Form.Group>
            <Container>
            <Row>
              <Col xs={6} md={4}>
                <Image src={this.state.imgGuru} value={this.state.imgGuru} style={imgUpload} rounded />
              </Col>
            </Row>
          </Container>
            </Form.Group>
            <div className="input-group" style={buttonAdd}>
              <div className="input-group-prepend">
                <span className="input-group-text" id="inputGroupFileAddon01" name="imgGuru" >
                  Upload
                </span>
              </div>
              <div className="custom-file">
                <input
                  style={aaa}
                  onChange={this.handleChange}
                  type="file"
                  className="custom-file-input"
                  id="inputGroupFile01"
                  aria-describedby="inputGroupFileAddon01"
                />
                <label className="custom-file-label" htmlFor="inputGroupFile01" style={bb}>
                  Choose file
                </label>
              </div>
            </div>
            <br/>
            <Button variant="primary" type="submit" style={buttonSbmt} >
              Submit
            </Button>
          </Form>
        </popover>
      )
      
      const {posts} = this.state
      const options = {
        page: 2,  // which page you want to show as default
        sizePerPageList: [ {
          text: '5', value: 5
        }, {
          text: '10', value: 10
        }, {
          text: 'All', value: posts.length
        } ], // you can change the dropdown list for size per page
        sizePerPage: 5,  // which size per page you want to locate as default
        pageStartIndex: 1, // where to start counting the pages
        paginationSize: 3,  // the pagination bar size.
        prePage: 'Prev', // Previous page button text
        nextPage: 'Next', // Next page button text
        firstPage: 'First', // First page button text
        lastPage: 'Last', // Last page button text
        paginationShowsTotal: this.renderShowsTotal,  // Accept bool or function
        // paginationPosition: 'bottom',  // default is bottom, top and both is all available
        // hideSizePerPage: true, //You can hide the dropdown for sizePerPage
        alwaysShowAllBtns: true // Always show next and previous button
        // withFirstAndLast: false > Hide the going to First and Last page button
      };
      
        const move ={
          position : 'relative',
          bottom : '20px'
        }
      
        return(
          <Container className="mt-4"  style={move}>
          <BootstrapTable  data={posts} exportCSV search={ true } options={options}>
          <TableHeaderColumn width='150' dataField='nip' isKey={true}>NIP</TableHeaderColumn>
          <TableHeaderColumn width='150' dataField='nama'>Nama</TableHeaderColumn>
          <TableHeaderColumn width='150' dataField='alamat'>Alamat</TableHeaderColumn>
          <TableHeaderColumn width='150' dataField='imgGuru' dataFormat={imageFormatter} searchable={false}>Images</TableHeaderColumn>
          
          </BootstrapTable>
          <OverlayTrigger trigger="click" placement="right" overlay={popover}>
          
          <Button  className="float-right">
            Tambah Baru</Button>
          </OverlayTrigger>
          </Container>
        );
    }
}
export default Tables;
// {this.state.items.map(items => <tr>{items.nis}</tr>)}