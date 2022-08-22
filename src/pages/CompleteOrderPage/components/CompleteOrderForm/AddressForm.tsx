import { useFormContext } from 'react-hook-form'
import { Input } from '../../../../Components/Input'
import { AddressFormContainer } from './styles'

interface ErrorsType {
  errors: {
    [key: string]: {
      message: string
    }
  }
}

export const AddressForm = () => {
  const { register, formState } = useFormContext()

  const { errors } = formState as unknown as ErrorsType

  return (
    <AddressFormContainer>
      <Input
        placeholder="CEP"
        className="cep"
        type="number"
        {...register('cep')}
        error={errors.cep?.message}
      />
      <Input
        placeholder="Rua"
        className="street"
        {...register('street')}
        error={errors.street?.message}
      />
      <Input
        placeholder="Número"
        type="number"
        {...register('number')}
        error={errors.number?.message}
      />
      <Input
        placeholder="Complemento"
        className="complement"
        {...register('complement')}
        error={errors.complement?.message}
        rightText="Opcional"
      />
      <Input
        placeholder="Bairro"
        {...register('district')}
        error={errors.district?.message}
      />
      <Input
        placeholder="Cidade"
        {...register('city')}
        error={errors.city?.message}
      />
      <Input placeholder="UF" {...register('uf')} error={errors.uf?.message} />
    </AddressFormContainer>
  )
}
