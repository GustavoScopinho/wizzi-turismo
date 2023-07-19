import { object, string } from 'yup'

export const schema = object({
  origem: string().required('Campo obrigatório.'),
  destino: string().required('Campo obrigatório.'),
  entrada: string('Escolha uma data válida').required('Campo obrigatório.'),
  saida: string('Escolha uma data válida').required('Campo obrigatório.'),
  adultos: string().required('Campo obrigatório.'),
  criancas: string(),
  nome: string().required('Campo obrigatório.'),
  email: string()
    .email('Digite um e-mail válido.')
    .required('Campo obrigatório.')
})
