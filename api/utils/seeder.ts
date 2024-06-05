import { makeCreateBrothUseCase } from "@/use-cases/factories/make-create-broths-use-case";
import { makeCreateProteinUseCase } from "@/use-cases/factories/make-create-protein-use-case";
import dotenv from 'dotenv';

export async function seed() {
    const createProteinUseCase = makeCreateProteinUseCase();
    const createBrothUseCase = makeCreateBrothUseCase();

    const broths = [
        {
            name: 'Salt',
            description: 'Simple like the seawater, nothing more ',
            imageActive: 'SaltActive.svg',
            imageInactive: 'SaltInactive.svg',
            price: 10
        },
        {
            name: 'Shoyu',
            description: 'The good old and traditional soy sauce',
            imageActive: 'ShoyuActive.svg',
            imageInactive: 'ShoyuInactive.svg',
            price: 10
        },
        {
            name: 'Miso',
            description: 'Paste made of fermented soybeans',
            imageActive: 'MisoActive.svg',
            imageInactive: 'MisoInactive.svg',
            price: 12
        }
    ];

    const proteins = [
        {
            name: 'Chasu',
            description: 'A sliced flavourful pork meat with a selection of season vegetables.',
            imageActive: 'ChasuActive.svg',
            imageInactive: 'ChasuInactive.svg',
            price: 10
        },
        {
            name: 'Yasai Vegetarian',
            description: 'A delicious vegetarian lamen with a selection of season vegetables.',
            imageActive: 'YasaiVegetarianActive.svg',
            imageInactive: 'YasaiVegetarianInactive.svg',
            price: 10
        },
        {
            name: 'Karaague',
            description: 'Three units of fried chicken, moyashi, ajitama egg and other vegetables.',
            imageActive: 'KaraagueActive.svg',
            imageInactive: 'KaraagueInactive.svg',
            price: 12
        }
    ];

    for (const broth of broths) {
        await createBrothUseCase.execute(broth);
    }

    for (const protein of proteins) {
        await createProteinUseCase.execute(protein);
    }
}

dotenv.config(); // Carrega as variáveis de ambiente do arquivo .env

(async () => {
    try {
        await seed();
        console.log('Database seeded successfully');
        process.exit(0); // Encerra o processo com sucesso
    } catch (error) {
        console.error('Error seeding database:', error);
        process.exit(1); // Encerra o processo com erro
    }
})();