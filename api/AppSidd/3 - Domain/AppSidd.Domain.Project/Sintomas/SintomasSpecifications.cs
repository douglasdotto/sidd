using AppSidd.Domain.Specifications;
using System.Collections.Generic;

namespace AppSidd.Domain.Project
{
    internal class SintomasSpecifications : List<SpecificationBase<Sintomas>>
    {
        public SintomasSpecifications()
        {
            AddRange(new List<SpecificationBase<Sintomas>>() {
            });
        }
    }
}