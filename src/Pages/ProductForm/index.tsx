import React, { FormEvent, useState } from 'react'
import {useHistory} from 'react-router-dom'
import Input from '../../Components/Input'
import Loading from '../../Components/Loading'
import PageHeader from '../../Components/PageHeader'
import TextArea from '../../Components/TextArea'
import api from '../../services/api'


import './styles.css'


function ProductForm () {

  const history = useHistory()

  const [name, setName] = useState('')
  const [avatar, setAvatar] = useState('')
  const [description, setDescription] = useState('')
  const [price, setPrice] = useState('')
  const [amount, setAmount] = useState('')
  const [whatsapp, setWhatsapp] = useState('')

  const [loading, setLoading] = useState(false)


  function onCreateProduct(e: FormEvent) {
    e.preventDefault()

    const data = {
      name,
      avatar,
      description, 
      price, 
      amount, 
      whatsapp
    }

    setLoading(true)

    api.post('products', data).then(() => {
      alert('Produto cadastrado com sucesso!')
      setLoading(false)
      history.push('/')
    }).catch(() => {
      alert('Erro ao cadastrar')
    })
  }

  return (
    <div id="page-product-form" className='container'>
      <PageHeader title='Cadastro' description='Preencha os campos' />
      

      <main>
      
        <form onSubmit={onCreateProduct} >
          <fieldset>
            <legend>Dados do Produto</legend>

            <Input 
              name='name'
              label='Nome do Produto'
              value={name}
              onChange={(e) =>{setName(e.target.value)}}
            />
            <Input 
              name='avatar'
              label='avatar do produto'
              observation='Obs(Copie e cole o link da imagem aqui)'
              value={avatar}
              onChange={(e) => {setAvatar(e.target.value)}}
            />
            

            <TextArea 
              name='description'
              label='Descrição'
              value={description}
              onChange={(e) => {setDescription(e.target.value)}}
            />

            <Input 
              name='price'
              label='Preço'
              value={price}
              onChange={(e) => {setPrice(e.target.value)}}
            />

            <Input 
              name='amount'
              label='Quantidade'
              value={amount}
              onChange={(e) => {setAmount(e.target.value)}}
            />

            <Input 
              name='whatsapp'
              label='WhatsApp'
              value={whatsapp}
              onChange={(e) => {setWhatsapp(e.target.value)}}
            />

          
          </fieldset>
          <footer>
            <p>
              Atenção preencha todos os dados
              {loading && (<Loading />)}
              <button type='submit' >Salvar</button>
            </p>
          </footer>
        </form>
      </main>
    </div>
  )
}

export default ProductForm