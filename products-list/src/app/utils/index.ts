export function getCategoryName(categoryId: number): string {
  switch (categoryId) {
    case 1:
      return 'Roupas';
    case 2:
      return 'Calçados';
    case 3:
      return 'Eletrônicos';
    case 4:
      return 'Esportes';
    case 5:
      return 'Tecnologia';
    case 6:
      return 'Livros';
    case 7:
      return 'Material Escolar';
    case 8:
      return 'Móveis';
    case 9:
      return 'Higiene Pessoal';
    case 10:
      return 'Casa e Decoração';
    default:
      return 'Categoria não encontrada';
  }
}

export function getCategoryId(categoryName: string): number {
  switch (categoryName) {
    case 'Roupas':
      return 1;
    case 'Calçados':
      return 2;
    case 'Eletrônicos':
      return 3;
    case 'Esportes':
      return 4;
    case 'Tecnologia':
      return 5;
    case 'Livros':
      return 6;
    case 'Material Escolar':
      return 7;
    case 'Móveis':
      return 8;
    case 'Higiene Pessoal':
      return 9;
    case 'Casa e Decoração':
      return 10;
    default:
      return 0;
  }
}
