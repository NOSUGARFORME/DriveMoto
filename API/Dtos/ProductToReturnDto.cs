namespace API.Dtos
{
    public class ProductToReturnDto
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public string ManufacturedCountry { get; set; }
        public int SeatsNumber { get; set; }
        public int Power { get; set; }
        public int ReleaseYear { get; set; }
        public decimal Price { get; set; }
        public string PictureUrl { get; set; }
        public string ProductType { get; set; }
        public string ProductBrand { get; set; }
        public string EngineType { get; set; }
        
    }
}