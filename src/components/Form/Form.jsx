import { useForm } from 'react-hook-form'
import * as S from './Form.styled'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { yupResolver } from '@hookform/resolvers/yup'

import { PlaneIcon } from 'lucide-react'
import { schema } from '../schema'

export function Form() {
  const {
    register,
    handleSubmit: onSubmit,
    formState: { errors }
  } = useForm({ resolver: yupResolver(schema) })

  const handleSubmit = data => {
    console.log(data)
    toast.success('Viagem confirmada!', {
      position: 'top-center'
    })
  }

  return (
    <>
      <ToastContainer />
      <S.Form onSubmit={onSubmit(handleSubmit)}>
        <S.ContainerForm>
          <S.Fieldset>
            <S.Legend>
              Escolha seu destino! <PlaneIcon />
            </S.Legend>
            <S.ContainerInput>
              <label htmlFor="origem">Origem</label>

              <input
                type="text"
                id="origem"
                {...register('origem')}
                placeholder="Ex: São Paulo"
              />
              {errors?.origem && <span>{errors?.origem?.message}</span>}
            </S.ContainerInput>
            <S.ContainerInput>
              <label htmlFor="destino">Destino</label>
              <input
                type="text"
                id="destino"
                {...register('destino')}
                placeholder="Ex: Orlando"
              />
              {errors?.destino && <span>{errors?.destino?.message}</span>}
            </S.ContainerInput>
          </S.Fieldset>

          <S.Fieldset>
            <S.ContainerInput>
              <label htmlFor="entrada">Entrada</label>
              <input type="date" id="entrada" {...register('entrada')} />
              {errors?.entrada && <span>{errors?.entrada?.message}</span>}
            </S.ContainerInput>
            <S.ContainerInput>
              <label htmlFor="saida">Saída</label>
              <input type="date" id="saida" {...register('saida')} />
              {errors?.saida && <span>{errors?.saida?.message}</span>}
            </S.ContainerInput>
          </S.Fieldset>
          <S.Fieldset>
            <S.ContainerInput>
              <label htmlFor="adultos">Adultos</label>
              <input
                type="number"
                id="adultos"
                {...register('adultos')}
                placeholder="Ex: 2"
              />
              {errors?.adultos && <span>{errors?.adultos?.message}</span>}
              {console.log(errors?.adultos)}
            </S.ContainerInput>

            <S.ContainerInput>
              <label htmlFor="criancas">Crianças</label>
              <input type="number" id="criancas" {...register('criancas')} />
            </S.ContainerInput>
          </S.Fieldset>
          <S.Fieldset>
            <S.ContainerName>
              <label htmlFor="nome">Nome:</label>
              <input
                type="text"
                id="nome"
                {...register('nome')}
                placeholder="Ex: Claudio"
              />
              {errors?.nome && <span>{errors?.nome?.message}</span>}
            </S.ContainerName>
          </S.Fieldset>
          <S.Fieldset>
            <S.ContainerName>
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                {...register('email')}
                placeholder="Ex: claudio@hotmail.com"
              />
              {errors?.email && <span>{errors?.email?.message}</span>}
            </S.ContainerName>
          </S.Fieldset>
          <S.ContainerButton>
            <input type="submit" value="Enviar" />
          </S.ContainerButton>
        </S.ContainerForm>
      </S.Form>
    </>
  )
}
