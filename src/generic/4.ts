/*
  Використовуйте generics та інтерфейси, щоб виправити помилку в наступних класах:
*/


// Клас компонента, що використовує generics
class Component<T> {
  constructor(public props: T) {}
}

// Інтерфейс для пропсів сторінки, що розширює базовий інтерфейс компонента
interface PageProps {
  title: string;
}

// Клас сторінки, що успадковує від компонента та використовує generics
class Page extends Component<PageProps> {
  pageInfo() {
    console.log(this.props.title);
  }
}

export {};
