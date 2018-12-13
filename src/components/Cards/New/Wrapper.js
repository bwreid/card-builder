import React from 'react'
import styled from 'styled-components'
import { Form } from 'informed'
import Field from './helpers/Field'

const Wrapper = styled.section`
  height: 100vh;
  margin-top: 0 !important;
`

class CardsNewWrapper extends React.Component {
  state = { form: {} }
  sync = (form) => {
    this.setState({ form })
  }

  render () {
    return (
      <Wrapper className='columns'>
        <div className='column'>
          <section className='section'>
            <Form onChange={this.sync}>
              <div className='field'>
                <Field name={'Title'} />
                <Field name={'Image URL'} />
                <Field name={'Card Text'} />
                <button className='button is-primary' type='submit'>Create</button>
              </div>
            </Form>
          </section>
        </div>
        <div className='column has-background-black-ter' />
      </Wrapper>
    )
  }
}

export default CardsNewWrapper
