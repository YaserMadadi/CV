import { Component, OnInit } from '@angular/core';
import { Card, Skill } from './model'
import { SkillCards } from './skill-cards/skill-cards';

@Component({
  selector: 'app-skills',
  imports: [
    SkillCards
  ],
  templateUrl: './skills.html',
  styleUrl: './skills.scss',
})
export class Skills implements OnInit {

  cards: Card[] = [];


  ngOnInit(): void {
    let items: Skill[] = [];

    this.cards.push(new Card(2, 'Data & Analytics', '', items));

    items.push(new Skill('Data Analyst', 100));
    items.push(new Skill('Power BI', 100, 'Dashboards, DAX, Power Query, Calculated Columns'));
    items.push(new Skill('Data Integration & Governance', 90, 'ERP, Celigo, Databricks, Delta Lake'));
    items.push(new Skill('Data Modeling', 100, 'Star/Snowflake Schema'));

    // SQL Server
    items = [];
    this.cards.push(new Card(1, 'Database', '', items));

    items.push(new Skill('DataBase Designing & Programming', 100, 'SQL Server, Azure SQL, MongoDB'));
    items.push(new Skill('T-SQL', 100, 'StoredProcedure, UDF, Triggers, Assemblies'));
    items.push(new Skill('DataBase Optimization', 100, 'Indexing, Partitioning, Memory-Optimized Tables, ...'));
    items.push(new Skill('Query Optimization', 100, ''));

    // Backend Development
    items = [];
    this.cards.push(new Card(3, 'BackEnd Development', '', items));

    items.push(new Skill('C#', 100, '.Net 2 - .Net 10'));
    items.push(new Skill('ASP.Net Web API', 100, ''));
    items.push(new Skill('Entity Framework & LINQ', 98, ''));
    items.push(new Skill('ADO.Net', 100, ''));

    // FrontEnd Development
    items = [];
    this.cards.push(new Card(5, 'FrontEnd Development', '', items));

    items.push(new Skill('Angular', 100, 'Legacy Migration to Angular 21, RxJS, Signal '));
    items.push(new Skill('React', 80, ''));
    items.push(new Skill('MVC', 90, ''));
    items.push(new Skill('WPF', 90, ''));
    items.push(new Skill('Blazor', 90, ''));

    // Cloud & DevOps
    items = [];
    this.cards.push(new Card(4, 'Cloud & DevOps', '', items));

    items.push(new Skill('Microsoft Azure', 100, 'Function Apps, Logic Apps, App Services, Key Vault'));
    items.push(new Skill('Git', 90, ''));
    items.push(new Skill('CI/CD Pipelines', 80, ''));
    items.push(new Skill('Docker', 70, ''));
    items.push(new Skill('', 0, ''));

    // Methodology & Testing
    items = [];
    this.cards.push(new Card(6, 'Methodology & Testing', '', items));

    items.push(new Skill('Agile & Waterfall', 100));
    items.push(new Skill('SDLC', 100));
    items.push(new Skill('OOP', 100));
    items.push(new Skill('SOLID', 100));
    items.push(new Skill('unit testing & mocking', 90, 'xUnit, Moq, NSubstitute'));

    this.cards = this.cards.sort((a, b) => a.index - b.index);

  }



}
