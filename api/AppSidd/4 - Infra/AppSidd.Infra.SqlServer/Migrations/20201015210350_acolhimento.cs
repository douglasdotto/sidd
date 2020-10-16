using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace AppSidd.Infra.SqlServer.Migrations
{
    public partial class acolhimento : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "Idade",
                table: "AspNetUsers",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.CreateTable(
                name: "Acolhimento",
                columns: table => new
                {
                    AcolhimentoId = table.Column<Guid>(nullable: false),
                    UserId = table.Column<string>(nullable: true),
                    FrequenciaCardiaca = table.Column<string>(nullable: true),
                    Saturação = table.Column<string>(nullable: true),
                    PressaoArterial = table.Column<string>(nullable: true),
                    Glicemia = table.Column<string>(nullable: true),
                    Sintomas = table.Column<string>(nullable: true),
                    Medicamentos = table.Column<string>(nullable: true),
                    Observacoes = table.Column<string>(nullable: true),
                    Created = table.Column<DateTime>(nullable: false),
                    CreatedBy = table.Column<string>(nullable: true),
                    Updated = table.Column<DateTime>(nullable: true),
                    UpdatedBy = table.Column<string>(nullable: true),
                    IsDeleted = table.Column<bool>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Acolhimento", x => x.AcolhimentoId);
                });

            migrationBuilder.UpdateData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "23D9D409-D7AA-4966-9047-48C04B41F0A1",
                column: "ConcurrencyStamp",
                value: "84d8b1d9-f0c2-46c2-9521-fe8f7652f1d6");

            migrationBuilder.UpdateData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "437D49C5-9C56-4E13-9E65-EB1BFF27B0CA",
                column: "ConcurrencyStamp",
                value: "1f3e962b-57bc-4a6b-96dc-45abfe0301f6");

            migrationBuilder.UpdateData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "53012ACA-C557-4991-8538-F22C0450CC1F",
                column: "ConcurrencyStamp",
                value: "800579a3-9daa-4c02-82d6-967a21bbfc6f");

            migrationBuilder.UpdateData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "84A9CF58-31F8-4C1B-BB08-E93813404C22",
                column: "ConcurrencyStamp",
                value: "3a251061-b641-4646-8e12-e8d698c68cb6");

            migrationBuilder.UpdateData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "BCC9B822-766F-4F00-8A72-288FB78260AB",
                column: "ConcurrencyStamp",
                value: "305bb494-757f-4df5-8148-66a074ca8330");

            migrationBuilder.UpdateData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "F4EA9499-F2FD-464E-9039-A115177C887D",
                column: "ConcurrencyStamp",
                value: "2113732f-6ea1-4286-b68c-02abd9f6f13a");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Acolhimento");

            migrationBuilder.DropColumn(
                name: "Idade",
                table: "AspNetUsers");

            migrationBuilder.UpdateData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "23D9D409-D7AA-4966-9047-48C04B41F0A1",
                column: "ConcurrencyStamp",
                value: "fcbc1498-425b-4b21-ab98-ca4cc0341897");

            migrationBuilder.UpdateData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "437D49C5-9C56-4E13-9E65-EB1BFF27B0CA",
                column: "ConcurrencyStamp",
                value: "0f13df96-389f-4c3d-9919-b289004d5fc1");

            migrationBuilder.UpdateData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "53012ACA-C557-4991-8538-F22C0450CC1F",
                column: "ConcurrencyStamp",
                value: "091fe36c-2462-49ba-8a59-077c1b294d5d");

            migrationBuilder.UpdateData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "84A9CF58-31F8-4C1B-BB08-E93813404C22",
                column: "ConcurrencyStamp",
                value: "d653f872-fef2-41eb-b760-932023455864");

            migrationBuilder.UpdateData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "BCC9B822-766F-4F00-8A72-288FB78260AB",
                column: "ConcurrencyStamp",
                value: "bdcbf840-90e1-4860-82e2-65bc7b47bce8");

            migrationBuilder.UpdateData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "F4EA9499-F2FD-464E-9039-A115177C887D",
                column: "ConcurrencyStamp",
                value: "59f3c281-1928-42dd-959b-5996f273cf82");
        }
    }
}
