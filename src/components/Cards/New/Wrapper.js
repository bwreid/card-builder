import React from 'react'
import styled from 'styled-components'
import { Form, Text } from 'informed'

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
                <label className='label'>
                  Title
                  <div className='control'>
                    <Text id='title' className='input' field='title' />
                  </div>
                </label>
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
