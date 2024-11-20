import { Card, Button } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';

const AddresCart = ({ item, showButton, handleSelectAddress, isSelected }) => {
    return (
        <Card
            className="flex gap-5 w-64 p-5"
            style={{
            
                border: `1px solid ${isSelected ? 'primary' : 'gray'}`, // Muda a borda do Card
                }}

        >
            <HomeIcon />
            <div className="space-y-3 text-gray-500">
                <h1 className="font-semibold text-lg text-white">Address</h1>
                <p>{item.street ? `${item.street}, ${item.number || "N/A"}` : "N/A"}</p>
                <p>{`${item.city}, ${item.state}, ${item.zipCode}`}</p>
                <p>{item.country}</p>
                {showButton && (
                    <Button
                        variant="outlined"
                        fullWidth
                        onClick={() => handleSelectAddress(item)} // Chama a função de selecionar o endereço
                        style={{
                            backgroundColor: isSelected ? '#3f51b5' : 'primary', // Cor de fundo muda quando selecionado
                            color: isSelected ? 'white' : 'primary', // Cor do texto do botão
                            borderColor: isSelected ? '#3f51b5' : 'primary', // Cor da borda
                        }}
                    >
                        Select
                    </Button>
                )}
            </div>
        </Card>
    );
};

export default AddresCart;
