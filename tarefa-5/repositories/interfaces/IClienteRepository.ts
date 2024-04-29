import Cliente from "../../entities/Cliente";

interface IClienteRepository {
  adicionarCliente(cliente: Cliente): void;
  listaClientes(): Cliente[];
}

export default IClienteRepository;