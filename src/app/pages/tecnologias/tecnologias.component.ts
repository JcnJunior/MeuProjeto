import { Component } from '@angular/core';

@Component({
  selector: 'app-tecnologias',
  templateUrl: './tecnologias.component.html',
  styleUrls: ['./tecnologias.component.scss']
})
export class TecnologiasComponent {

  tecnologias = pegarTecnologias();
  
}

function pegarTecnologias() {
  return [
    "Clean code",
    "SOLID",
    "GIT",
    "Docker",
    "Kubernetes",
    "Oauth2",
    "Http",
    "RestFul",
    "CI/CD",
    
    "Java",
    "Kotlin",
    "Spring Boot",
    "Spring JPA",
    "Spring Data",
    "Spring Security",
    "Spring Actuator",
    "EJB",
    
    "Javascript",
    "Typescript",
    "NodeJS",
    "Angular",
    "React",
    "React native",
    "ExpressJS",
    
    "C#",
    ".Net core",

    "Kafka",
    "RabbitMQ",
    "ActiveMQ",

    "SQL",
    "Postgres",
    "SQL Server",
    "MySQL",
    "Oracle",

    "MongoDB",
    "DocumentDB",

    "Redis",
    "Cassandra",
    "Elastic search",

    "AWS",
    "AWS Lambda",
    "AWS Step function",
    "AWS S3",
    "AWS SQS",
    "AWS SNS",
    "AWS RDS",
    "AWS EC2",
    "AWS ECS",
    "AWS Code commit",
    "AWS Code build",
    "AWS Cloud formation",
    "AWS Gateway",
    "AWS Amplify",
    "AWS Cognito",

    "GCP",
    "Firebase",
    "Firestore",
    "Cloud Run",
    "Cloud Functions",
  ];
}