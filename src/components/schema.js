import { object, string, number } from 'yup'

export const schema = object({
  origem: string().required('Campo obrigatório.'),
  destino: string().required('Campo obrigatório.'),
  entrada: string('Escolha uma data válida').required('Campo obrigatório.'),
  saida: string('Escolha uma data válida').required('Campo obrigatório.'),
  adultos: number()
    .min(1, 'Digite a quantidade de adultos')
    .positive('Digite um número positivo de adultos')
    .integer('Digite um número inteiro')
    .typeError('Digite um número'),

  criancas: string(),
  nome: string().required('Campo obrigatório.'),
  email: string()
    .email('Digite um e-mail válido.')
    .required('Campo obrigatório.')
})
