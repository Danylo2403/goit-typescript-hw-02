/*
  Використовуйте generics та інтерфейси, щоб виправити помилку в наступних класах:
*/

interface ComponentProps {
  id: number;
  name: string;
}

// Клас компонента, що використовує generics
class Component<T extends ComponentProps> {
  constructor(public props: T) {}
}

// Інтерфейс для пропсів сторінки, що розширює базовий інтерфейс компонента
interface PageProps extends ComponentProps {
  title: string;
}

// Клас сторінки, що успадковує від компонента та використовує generics
class Page extends Component<PageProps> {
  pageInfo() {
    console.log(this.props.title);
  }
}

export {};
