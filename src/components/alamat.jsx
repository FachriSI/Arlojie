import React, { useState } from "react";

const Alamat = ({ onSubmit, onCancel }) => {
  const [form, setForm] = useState({
    nama: "",
    telepon: "",
    provinsi: "",
    kota: "",
    kecamatan: "",
    kelurahan: "",
    jalan: "",
    detail: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSubmit) onSubmit(form);
  };

  return (
    <div style={{
      maxWidth: 400,
      margin: "0 auto",
      background: "#fff",
      borderRadius: 12,
      boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
      padding: 24
    }}>
      <h2>Alamat Baru</h2>
      <p style={{ color: "#555" }}>
        Untuk membuat pesanan, silahkan tambahkan alamat pengiriman
      </p>
      <form onSubmit={handleSubmit}>
        <div style={{ display: "flex", gap: 12 }}>
          <input
            type="text"
            name="nama"
            placeholder="Nama Lengkap"
            value={form.nama}
            onChange={handleChange}
            style={{ flex: 1, border: "1px solid #222", borderRadius: 20, padding: "8px 16px", marginBottom: 12 }}
            required
          />
          <input
            type="text"
            name="telepon"
            placeholder="Nomor Telepon"
            value={form.telepon}
            onChange={handleChange}
            style={{ flex: 1, border: "1px solid #222", borderRadius: 20, padding: "8px 16px", marginBottom: 12 }}
            required
          />
        </div>
        <input
          type="text"
          name="provinsi"
          placeholder="Provinsi"
          value={form.provinsi}
          onChange={handleChange}
          style={{ width: "100%", border: "1px solid #222", borderRadius: 20, padding: "8px 16px", marginBottom: 12 }}
          required
        />
        <input
          type="text"
          name="kota"
          placeholder="Kota"
          value={form.kota}
          onChange={handleChange}
          style={{ width: "100%", border: "1px solid #222", borderRadius: 20, padding: "8px 16px", marginBottom: 12 }}
          required
        />
        <input
          type="text"
          name="kecamatan"
          placeholder="Kecamatan"
          value={form.kecamatan}
          onChange={handleChange}
          style={{ width: "100%", border: "1px solid #222", borderRadius: 20, padding: "8px 16px", marginBottom: 12 }}
          required
        />
        <input
          type="text"
          name="kelurahan"
          placeholder="Kelurahan"
          value={form.kelurahan}
          onChange={handleChange}
          style={{ width: "100%", border: "1px solid #222", borderRadius: 20, padding: "8px 16px", marginBottom: 12 }}
          required
        />
        <textarea
          name="jalan"
          placeholder="Nama Jalan, No Rumah"
          value={form.jalan}
          onChange={handleChange}
          style={{ width: "100%", border: "1px solid #ccc", borderRadius: 8, padding: "8px 16px", marginBottom: 12, minHeight: 48, background: "#f7f7f7" }}
          required
        />
        <textarea
          name="detail"
          placeholder="Detail lainnya (Cth: Blok, unit, patokan)"
          value={form.detail}
          onChange={handleChange}
          style={{ width: "100%", border: "1px solid #ccc", borderRadius: 8, padding: "8px 16px", marginBottom: 24, minHeight: 40, background: "#f7f7f7" }}
        />
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <button
            type="button"
            onClick={onCancel}
            style={{
              border: "1px solid #222",
              borderRadius: 20,
              background: "#fff",
              color: "#222",
              padding: "8px 32px",
              fontWeight: 500,
              cursor: "pointer"
            }}
          >
            Nanti Saja
          </button>
          <button
            type="submit"
            style={{
              border: "none",
              borderRadius: 20,
              background: "#000",
              color: "#fff",
              padding: "8px 32px",
              fontWeight: 500,
              cursor: "pointer"
            }}
          >
            Ok
          </button>
        </div>
      </form>
    </div>
  );
};

export default Alamat;